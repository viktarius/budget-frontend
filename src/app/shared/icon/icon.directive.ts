import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { loadIcon } from "iconify-icon";
import { CommonModule } from "@angular/common";

@Directive({
    selector: 'app-icon,[icon]',
    standalone: true,
    providers: [CommonModule]
})
export class IconDirective implements OnInit {
    @Input() public set icon(value: string) {
        this.loadIcon(value);
    };

    @Input() public set size(value: number | string) {
        this.renderer.setStyle(this.el.nativeElement, 'font-size', value)
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    public ngOnInit(): void {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-flex');
    }

    private async loadIcon(iconName: string): Promise<void> {
        const icon = await loadIcon(iconName);

        const iconWrapper = this.renderer.createElement('iconify-icon');
        iconWrapper.icon = icon;

        this.el.nativeElement.append(iconWrapper);
    }
}

import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, SecurityContext } from "@angular/core";
import { buildIcon, IconifyIcon, loadIcon } from "iconify-icon";
import { from, take } from "rxjs";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@Directive({
    selector: 'app-icon,[icon]',
    standalone: true,
    providers: [CommonModule]
})
export class IconDirective implements OnInit {
    @Input() public set icon(value: string) {
        // from(loadIcon(value))
        //   .pipe(
        //     take(1)
        //   ).subscribe((iconObj: IconifyIcon) => {
        //   // const svgData = this.domSanitizer.sanitize(SecurityContext.HTML, this.domSanitizer.bypassSecurityTrustHtml(iconObj.body)) || '';
        //   // const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        //   // console.log(svg, svgData)
        //   // svg.setAttribute("width", "500");
        //   // svg.setAttribute("height", "500");
        //   // svg.innerHTML = svgData;
        //   // this.el.nativeElement.append(svg);
        //
        //   const iconWrapper = document.createElement('iconify-icon');
        //   iconWrapper.icon = iconObj;
        //
        //   this.el.nativeElement.append(iconWrapper);
        // })

        loadIcon(value).then((iconObj: IconifyIcon) => {
            // const svgData = this.domSanitizer.sanitize(SecurityContext.HTML, this.domSanitizer.bypassSecurityTrustHtml(iconObj.body)) || '';
            // const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            // console.log(svg, svgData)
            // svg.setAttribute("width", "500");
            // svg.setAttribute("height", "500");
            // svg.innerHTML = svgData;
            // this.el.nativeElement.append(svg);

            const iconWrapper = this.renderer.createElement('iconify-icon');
            iconWrapper.icon = iconObj;

            this.el.nativeElement.append(iconWrapper);
        })
    };

    @Input() public set size(value: number | string) {
        this.renderer.setStyle(this.el.nativeElement, 'font-size', value)
        // this.el.nativeElement.style.fontSize = value;
        // this.renderer.createElement()
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    public ngOnInit(): void {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-flex');
    }
}

import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#WebviewCard
 */
export class WebviewCard extends Card {
  public hideShareButton?: boolean;
  public id?: string;
  public webviewHeightRatio?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#WebviewCard';
  }

  /**
   * Get property definitions for WebviewCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHideShareButton',
        tsPropertyName: 'hideShareButton',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasWebviewHeightRatio',
        tsPropertyName: 'webviewHeightRatio',
        type: 'string',
        required: false
      }
    ];
  }


}

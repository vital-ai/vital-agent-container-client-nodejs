import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmbeddedCard
 */
export class EmbeddedCard extends VITAL_Node {
  public url?: string;
  public cardType?: string;
  public link?: string;
  public button?: string;
  public menu?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EmbeddedCard';
  }

  /**
   * Get property definitions for EmbeddedCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCardType',
        tsPropertyName: 'cardType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLink',
        tsPropertyName: 'link',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasButton',
        tsPropertyName: 'button',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMenu',
        tsPropertyName: 'menu',
        type: 'string',
        required: false
      }
    ];
  }


}

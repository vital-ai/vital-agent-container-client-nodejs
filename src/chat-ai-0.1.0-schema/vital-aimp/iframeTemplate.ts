import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#IFrameTemplate
 */
export class IFrameTemplate extends VITAL_Node {
  public templateID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#IFrameTemplate';
  }

  /**
   * Get property definitions for IFrameTemplate
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTemplateID',
        tsPropertyName: 'templateID',
        type: 'string',
        required: false
      }
    ];
  }


}

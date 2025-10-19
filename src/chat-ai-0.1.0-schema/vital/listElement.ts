import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#ListElement
 */
export class ListElement extends VITAL_Node {
  public firstElement?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#ListElement';
  }

  /**
   * Get property definitions for ListElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isFirstElement',
        tsPropertyName: 'firstElement',
        type: 'boolean',
        required: false
      }
    ];
  }


}

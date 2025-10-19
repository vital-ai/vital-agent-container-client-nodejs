import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountOffice
 */
export class HaleyAccountOffice extends VITAL_Node {
  public accountOfficeIdentifier?: string;
  public accountOfficeExternalIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccountOffice';
  }

  /**
   * Get property definitions for HaleyAccountOffice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOfficeIdentifier',
        tsPropertyName: 'accountOfficeIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOfficeExternalIdentifier',
        tsPropertyName: 'accountOfficeExternalIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}

import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalTransaction
 */
export class VitalTransaction extends VITAL_Node {
  public transactionState?: string;
  public transactionID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalTransaction';
  }

  /**
   * Get property definitions for VitalTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasTransactionState',
        tsPropertyName: 'transactionState',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasTransactionID',
        tsPropertyName: 'transactionID',
        type: 'string',
        required: false
      }
    ];
  }


}

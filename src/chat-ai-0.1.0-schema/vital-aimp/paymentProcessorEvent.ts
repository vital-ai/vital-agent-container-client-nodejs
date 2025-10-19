import { ProcessorEvent } from './processorEvent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentProcessorEvent
 */
export class PaymentProcessorEvent extends ProcessorEvent {
  public paymentProviderEventType?: string;
  public paymentProcessorEventId?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PaymentProcessorEvent';
  }

  /**
   * Get property definitions for PaymentProcessorEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPaymentProviderEventType',
        tsPropertyName: 'paymentProviderEventType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPaymentProcessorEventId',
        tsPropertyName: 'paymentProcessorEventId',
        type: 'string',
        required: false
      }
    ];
  }


}
